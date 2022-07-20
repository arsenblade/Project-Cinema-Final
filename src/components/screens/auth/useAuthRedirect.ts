import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

export const useAuthRedirect = (pathName?: string) => {
  const {user} = useAuth()
  const navigate = useNavigate()

  const redirect = pathName ? pathName : '/'

  useEffect(() => {
    if(user) navigate(redirect);
  }, [navigate, redirect, user])
}