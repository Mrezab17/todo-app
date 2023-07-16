import Form from "../components/Form";

const Register = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex items-center justify-center">
        <div className="h-3/4 w-8/12 bg-white rounded justify-center space-y-2 flex">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Register;
