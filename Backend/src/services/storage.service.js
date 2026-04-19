const ImageKit = require('@imagekit/nodejs');

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

// This function will take the file object from multer and upload it to ImageKit, then return the URL of the uploaded image
async function uploadFile(buffer) {
    try {
        const response = await imageKit.files.upload({
            file: buffer.toString('base64'), // multer buffer
            fileName: "image.jpg" // You can generate a unique name for the file if needed
        });

        return response.url;

    } catch (error) {
        console.error("Image upload failed:", error.message);
        throw error;
    }
}

module.exports = {
    uploadFile
};