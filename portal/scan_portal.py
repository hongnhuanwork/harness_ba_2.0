import os
import json
import re

# Absolute path configurations
WORKSPACE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUTPUT_JSON = os.path.join(WORKSPACE_DIR, "portal", "config", "content-map.json")

FOLDERS_TO_SCAN = ["output", "project_resources", "knowledge"]

def safe_read_file(file_path):
    for encoding in ["utf-8", "utf-16", "latin-1"]:
        try:
            with open(file_path, "r", encoding=encoding) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    raise ValueError(f"Unable to decode file {file_path}")

def parse_markdown_metadata(file_path):
    metadata = {}
    title = os.path.basename(file_path)
    
    try:
        content = safe_read_file(file_path)
            
        # 1. Check for YAML frontmatter
        yaml_match = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
        if yaml_match:
            yaml_text = yaml_match.group(1)
            for line in yaml_text.split("\n"):
                if ":" in line:
                    k, v = line.split(":", 1)
                    metadata[k.strip()] = v.strip()
            # Remove frontmatter from title search content
            content_body = content[yaml_match.end():]
        else:
            content_body = content
            
        # 2. Extract Title from H1 (# Title)
        title_match = re.search(r"^#\s+(.*?)\s*$", content_body, re.MULTILINE)
        if title_match:
            title = title_match.group(1)
            
        # 3. Check for Markdown Metadata block (e.g. - Key: Value)
        meta_bullets = re.findall(r"^-\s*([A-Za-z0-9\s_]+)\s*:\s*(.*?)\s*$", content_body, re.MULTILINE)
        for k, v in meta_bullets:
            metadata[k.strip()] = v.strip()
            
    except Exception as e:
        print(f"Error reading metadata from {file_path}: {e}")
        
    return title, metadata

def scan_files():
    print(f"Scanning workspace files under: {WORKSPACE_DIR}...")
    content_map = {}
    
    for folder in FOLDERS_TO_SCAN:
        folder_path = os.path.join(WORKSPACE_DIR, folder)
        if not os.path.exists(folder_path):
            print(f"Warning: Directory '{folder}' does not exist, skipping.")
            continue
            
        files_list = []
        for root, dirs, files in os.walk(folder_path):
            # Ignore hidden folders
            dirs[:] = [d for d in dirs if not d.startswith(".") and not d.startswith("node_modules")]
            
            for file in files:
                if file.endswith(".md"):
                    abs_path = os.path.join(root, file)
                    rel_path = os.path.relpath(abs_path, WORKSPACE_DIR).replace("\\", "/")
                    
                    title, metadata = parse_markdown_metadata(abs_path)
                    file_size = os.path.getsize(abs_path)
                    
                    files_list.append({
                        "path": rel_path,
                        "name": file,
                        "title": title,
                        "metadata": metadata,
                        "sizeBytes": file_size
                    })
        
        # Sort files by path for consistency
        files_list.sort(key=lambda x: x["path"])
        content_map[folder] = files_list
        print(f"Found {len(files_list)} files under '{folder}/'")
        
    # Write to content-map.json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(content_map, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully generated {OUTPUT_JSON}!")

if __name__ == "__main__":
    scan_files()
