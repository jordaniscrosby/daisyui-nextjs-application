import { useContext, createContext, useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

const SessionIdContext = createContext();

const SessionIdProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    function getSessionId() {
      var name = "sessionId" + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return null;
    }

    function generateSessionId() {
      let sessionId = uuidv4();
      document.cookie = `sessionId=${sessionId}; expires=0; path=/`;
      setSessionId(sessionId);
      return true;
    }

    const current_session = getSessionId();
    if (current_session) {
      setSessionId(current_session);
    } else {
      generateSessionId();
    }
  }, []);

  return (
    <SessionIdContext.Provider value={sessionId}>
      {children}
    </SessionIdContext.Provider>
  );
};

function useSessionId() {
  const sessionId = useContext(SessionIdContext);

  return sessionId;
}

export { SessionIdContext, SessionIdProvider, useSessionId };
