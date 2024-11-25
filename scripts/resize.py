from PIL import Image
import os

def resize_logo(logo_path):
    # Open the logo image
    logo = Image.open(logo_path)

    # Get the original logo size
    original_size = logo.size

    # Define the target sizes and their corresponding folder names
    sizes = [
        (16, 16, "favicon"),
        (32, 32, "small"),
        (48, 48, "medium"),
        (64, 64, "large"),
        (128, 128, "app_icon"),
        (256, 256, "large_app_icon"),
        (512, 512, "high_res"),
        (1024, 1024, "max_res")
    ]

    # Create a directory to store the resized logos
    output_dir = "resized_logos"
    os.makedirs(output_dir, exist_ok=True)

    # Resize the logo for each target size
    for size in sizes:
        width, height, folder_name = size
        resized_logo = logo.resize((width, height), resample=Image.Resampling.LANCZOS)

        # Create a subdirectory for each size
        size_dir = os.path.join(output_dir, folder_name)
        os.makedirs(size_dir, exist_ok=True)

        # Save the resized logo
        resized_logo_path = os.path.join(size_dir, f"logo_{width}x{height}.png")
        resized_logo.save(resized_logo_path)

        print(f"Resized logo to {width}x{height} and saved in {folder_name} folder.")

    print("Logo resizing completed.")

# Provide the path to your logo image
logo_path = "C:/Users/ric/Desktop/LSWD/websites/cflarborcare/public/logo-removebg-preview.png"

# Call the function to resize the logo
resize_logo(logo_path)