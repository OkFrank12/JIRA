
export interface iProps {
  name?: boolean;
  email?: boolean;
  password?: boolean;
  confirm?: boolean;

  name1?: string;
  namePlace?: string;

  email1?: string;
  emailPlace?: string;

  password1?: string;
  passwordPlace?: string;

  confirm1?: string;
  confirmPlace?: string;
}


export interface iBtn {
  title?: string;
  icon?: any;
  color?: string;
  bg?: string;
  onClick?: () => void;
  brad?: string;
  fs?: string;
  bdr?: string;
}


export interface iGlobal {
  actualName?: string;
  setActualName: React.Dispatch<React.SetStateAction<string>>;

  actualEmail?: string;
  setActualEmail?: React.Dispatch<React.SetStateAction<string>>;

  actualConfirm?: string;
  setActualConfirm?: React.Dispatch<React.SetStateAction<string>>;

  actualPassword?: string;
  setActualPassword?: React.Dispatch<React.SetStateAction<string>>;

  userState?: {} | null;
  setUserState?: React.Dispatch<React.SetStateAction<{}>> | null;
}

export interface iUser {
  name?: string;
  email?: string;
  password?: string;
}