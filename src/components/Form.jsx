const Form = () => {
  return (
    <form className="bg-gray-300 h-full w-full rounded p-10 pl-10 space-y-16">
      <div className="w-full flex flex-row row-span-1 h-10 space-x-10">
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          className="bg-white basis-5/12 pl-3 rounded "
        />
        <input
          id="lname"
          type="text"
          placeholder="Enter Your Last Name"
          className="bg-white basis-5/12 pl-3 rounded "
        />
      </div>
      <div className="w-full flex flex-row row-span-1 row-start-2 h-10 space-x-5">
        <select id="state" className="bg-white h-full pl-3 rounded basis-4/12">
          <option>Mazandaran</option>
          <option>Tehran</option>
          <option>Gilan</option>
        </select>
        <select id="sex" className="bg-white pl-3 rounded basis-2/12">
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          id="id"
          type="text"
          placeholder="Enter Your ID"
          className="bg-white basis-4/12 pl-3 rounded "
        />
      </div>
      <div className="w-full flex flex-row row-span-1 h-10 space-x-10">
        <input
          id="number"
          type="text"
          placeholder="Enter Your Phone Number"
          className="bg-white basis-5/12 pl-3 rounded "
        />
        <input
          id="email"
          type="text"
          placeholder="Enter Your Email"
          className="bg-white basis-5/12 pl-3 rounded "
        />
      </div>
      <div className="w-full flex flex-row row-span-1 row-start-2 h-10 space-x-5">
        <input type="submit" className="bg-green-600 basis-2/12 rounded-md" />
      </div>
    </form>
  );
};

export default Form;
