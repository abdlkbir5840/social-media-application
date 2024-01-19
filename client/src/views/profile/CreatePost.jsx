import React, { useRef, useState } from "react";

function CreatePost() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const showFileInput = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };
  return (
    <form action="#" class="panel-activity">
      <textarea
        name="user_activity"
        placeholder="Share what you've been up to..."
      ></textarea>
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "50%" }}
          />
        </div>
      )}
      <div class="actions">
        <div class="btn-group">
          <button
            type="button"
            class="btn-link"
            title=""
            data-toggle="tooltip"
            data-original-title="Post an Image"
            onClick={showFileInput}
          >
            <i class="fa fa-image"></i>
            <input
              type="file"
              name=""
              id="fileInput"
              ref={fileInputRef}
              class="hidden"
              onChange={handleFileChange}
            />
          </button>
          <button
            type="button"
            class="btn-link"
            title=""
            data-toggle="tooltip"
            data-original-title="Post an Question"
          >
            <i class="fa fa-question-circle-o"></i>
          </button>
        </div>
        <button type="submit" class="btn btn-sm btn-rounded btn-info">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
