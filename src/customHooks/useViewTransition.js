import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const useViewTransition = () => {

  const navigate = useNavigate();

  const handleViewTransition = (to) => (ev) => {
    if (!Boolean(document.startViewTransition)) return;
    ev.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };

  return { handleViewTransition };
};

export default useViewTransition;
