import os
import glob

def rename_images(folder_path):
    # Get a list of all image files in the folder (you can adjust the extensions as needed)
    image_files = glob.glob(os.path.join(folder_path, '*.jpg'))

    # Sort the files to maintain a consistent order
    image_files.sort()

    # Rename each image
    for i, file_path in enumerate(image_files):
        # Get the new file name
        new_file_name = f"{i + 1}.jpeg"
        new_file_path = os.path.join(folder_path, new_file_name)

        # Rename the file
        os.rename(file_path, new_file_path)
        print(f"Renamed {file_path} to {new_file_path}")

# Example usage
folder_path = '/home/bandarignaneshwar/cozynest/cozynest_creations/assets/images/projects/TKTC_HOUSE_9.5mx13.0m(123.5m2)'  # Change this to your folder path
rename_images(folder_path)

