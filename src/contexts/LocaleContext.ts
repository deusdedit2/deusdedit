import React, { SetStateAction } from "react";

const defaultValue = {
  locale: 'ptBR',
  setLocale: React.Dispatch<SetStateAction<string>>
}

export default React.createContext(defaultValue);