// src/types/global.d.ts
interface Window {
  Telegram: {
    WebApp: {
      ready: () => void;
      close: () => void;
      expand: () => void;
      isExpanded: boolean;
      sendData: (data: string) => void;
      // Add any additional WebApp methods you are using
    };
  };
}
