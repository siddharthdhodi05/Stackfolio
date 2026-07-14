import cloudinary from "#utils/cloudinary.utils.js";
import streamifier from "streamifier";

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400);
      throw new Error("Please upload an image");
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "portfolio-builder",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    res.status(200).json({
      message: "Image uploaded successfully",
      image: result.secure_url,
    });
  } catch (error) {
    res.status(500);
    throw error;
  }
};

export { uploadImage };
