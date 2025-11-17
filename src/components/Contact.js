import useOnlineStatus from "../utils/useOnlineStatus";
const Contact = () => {
  const isOnline = useOnlineStatus();
  if (!isOnline)
    return (
      <h1>
        Looks Like you're offline. Please check your Internet Connecttion...
      </h1>
    );
  return (
    <div>
      <h1>Aman</h1>
    </div>
  );
};

export default Contact;
