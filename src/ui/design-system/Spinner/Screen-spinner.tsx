import { Spinner } from "./Spinner";

export  function ScreenSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner size="large"></Spinner>
    </div>
  );
}
