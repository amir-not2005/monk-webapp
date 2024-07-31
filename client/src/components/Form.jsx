import React from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = React.useState({
    login: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3500/api/users",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-primary flex flex-col items-center rounded-md w-1/2 p-8"
      >
        <input
          type="text"
          placeholder="example@email.com"
          onChange={handleChange}
          name="login"
          value={formData.login}
          id="field1"
          className="mt-2 w-[200px] text-white bg-black border-white border-2 rounded-md py-1.5 px-3 text-center placeholder-white text-lg focus:placeholder-transparent"
        />
        <input
          type="text"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          id="field2"
          className="mt-2 w-[200px] text-white bg-black border-white border-2 rounded-md py-1.5 px-3 text-center placeholder-white text-lg focus:placeholder-transparent"
        />

        <button
          type="submit"
          className="mt-5 w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
