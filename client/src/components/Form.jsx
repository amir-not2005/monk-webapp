import React from "react";

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // API TO DATABASE
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

        <button className="mt-5 w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
