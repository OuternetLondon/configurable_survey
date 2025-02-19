import { useEffect } from "react";

const useMobileFriendly = () => {
  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  useEffect(() => {
    const disableScroll = (event) => event.preventDefault();
    document.body.style.overflow = "hidden";
    document.addEventListener("wheel", disableScroll, { passive: false });
    document.addEventListener("touchmove", disableScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("wheel", disableScroll);
      document.removeEventListener("touchmove", disableScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("gesturestart", (event) =>
      event.preventDefault()
    );
    document.addEventListener("gesturechange", (event) =>
      event.preventDefault()
    );
    document.addEventListener("gestureend", (event) => event.preventDefault());

    return () => {
      document.removeEventListener("gesturestart", (event) =>
        event.preventDefault()
      );
      document.removeEventListener("gesturechange", (event) =>
        event.preventDefault()
      );
      document.removeEventListener("gestureend", (event) =>
        event.preventDefault()
      );
    };
  }, []);

  useEffect(() => {
    const disableTouchMove = (event) => event.preventDefault();
    document.addEventListener("touchmove", disableTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", disableTouchMove);
    };
  }, []);
};

export default useMobileFriendly;
