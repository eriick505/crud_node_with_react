type ResponseErrorFields = {
  message: string;
  requiredFields: string[];
};

export type ResponseError = {
  error: string | ResponseErrorFields;
};
