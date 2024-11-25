import os
from PIL import Image

def convert_to_webp(folder_path):
    # Iterate over all files in the folder
    for filename in os.listdir(folder_path):
        # Check if the file has a .jpg or .png extension
        if filename.lower().endswith((".jpg", ".jpeg", ".png")):
            # Open the image using Pillow
            image_path = os.path.join(folder_path, filename)
            image = Image.open(image_path)

            # Convert the image to WebP format
            webp_filename = os.path.splitext(filename)[0] + ".webp"
            webp_path = os.path.join(folder_path, webp_filename)
            image.save(webp_path, "WebP")

            print(f"Converted {filename} to {webp_filename}")

# Specify the folder path containing the images
folder_path = "C:/Users/ric/Desktop/LSWD/websites/cflarborcare/public/pics"

# Call the function to convert images to WebP
convert_to_webp(folder_path)