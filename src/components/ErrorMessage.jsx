export const ErrorMessage = ({ errorMessage }) => {
  return (
    <div
      className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">
      { `${ errorMessage.response.data.message }` }
    </div>
  );
};
