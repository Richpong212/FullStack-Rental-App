import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Box, useToast } from "@chakra-ui/react";
import { activateUser } from "../services/user.service";
import { Button } from "react-bootstrap";

const ActivatePage = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  // get the token from the url
  const tokenParams: any = useParams<{ token: string }>();
  console.log(tokenParams.id);

  const toast = useToast();

  const navigate = useNavigate();

  // make the get request to the server
  const veryfyToken = async () => {
    try {
      const res = await activateUser(tokenParams.id);
      console.log(res);
      toast({
        title: "Account Activated",
        description: "Your account has been activated",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error: any) {
      console.log(error);
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const decoded: any = jwtDecode(tokenParams.id);
    if (decoded) {
      setName(decoded.fullName);
      setToken(tokenParams.id);
    }
    veryfyToken();
  }, []);

  // handle submit
  const handleSubmit = async (e: any) => {
    try {
      await activateUser({ token });
      toast({
        title: "Account Activated",
        description: "Your account has been activated",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Box>
        <h1>Hello {name} your account has been activated.</h1>
      </Box>
    </Box>
  );
};

export default ActivatePage;
