import React, { useRef, useState } from "react";

function Form() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form
        ref={formRef}
        style={{ backgroundColor: "#fff3e0", padding: "32px", flexGrow: 1 }}
      >
        <div class="row">
          <div class="form-group col-md-6">
            <label for="name">Your Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              required=""
            />
          </div>
          <div class="form-group col-md-6">
            <label for="name">Your Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              required=""
            />
          </div>
        </div>
        <div class="form-group">
          <label for="name">Subject</label>
          <input
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            required=""
          />
        </div>
        <div class="form-group">
          <label for="name">Message</label>
          <textarea
            class="form-control"
            name="message"
            rows="10"
            required=""
          ></textarea>
        </div>
        <div class="text-center mt-4">
          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
