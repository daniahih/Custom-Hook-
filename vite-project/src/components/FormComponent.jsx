import useInput from "./useInput"; // Assuming useInput is exported from this file

export default function FormComponent() {
  const {
    value: username,
    handleChange: handleUsernameChange,
    resetValue: resetUsername,
  } = useInput("");
  const {
    value: email,
    handleChange: handleEmailChange,
    resetValue: resetEmail,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted with Username: ${username} and Email: ${email}`);
    resetUsername();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
