import os
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Failed to process {input_path}. Error: {e}")

input_dir = 'assets/Experts'
output_dir = 'assets/Experts'

for filename in os.listdir(input_dir):
    if filename.endswith(".png") and not filename.endswith("-nobg.png"):
        input_path = os.path.join(input_dir, filename)
        output_filename = filename.replace('.png', '-nobg.png')
        output_path = os.path.join(output_dir, output_filename)
        remove_background(input_path, output_path)

print("Background removal complete.")
