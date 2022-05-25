import React from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      try {
        await listPets();
      } catch (error) {}
    };
    request();
  }, []);

  return <div>ProtectedPage</div>;
}

export default ProtectedPage;
