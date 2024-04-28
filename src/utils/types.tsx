export interface UserInfoType {
  user: {
    _id: string;
    name: string;
    email: string;
    admin: boolean;
  };
}

export interface UserState extends UserInfoType {
  setUser: (UserInfo: UserInfoType) => void;
  removeUser: () => void;
}

export type UserActionType =
  | {
      type: "SET_USER";
      payload: UserInfoType;
    }
  | {
      type: "DELETE_USER";
    };

export interface Event {
  _id?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  numberOfTickets?: number;
  cancelled?: boolean;
  createdAt?: string;
  remainingTickets?: number;
  boughtTickets?: number;
}
