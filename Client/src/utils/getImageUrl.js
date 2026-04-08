const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const getImageUrl = (image) => {
  if (!image) {
    return "/placeholder.jpg";
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_BASE_URL}/images/${image}`;
};
