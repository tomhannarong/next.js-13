interface ApiResponse<T> {
  status: string;
  code: number;
  data?: T;
  message: string;
  timestamp: string;
  errors?: ApiError[];
}

interface ApiError {
  field: string;
  message: string;
}

function createSuccessResponse<T>(
  statusCode: number = 200,
  data: T,
  message: string = "Request successful"
): ApiResponse<T> {
  const response: ApiResponse<T> = {
    status: "success",
    code: statusCode,
    data,
    message,
    timestamp: new Date().toISOString(),
  };
  return response;
}

function createErrorResponse(
  statusCode: number = 500,
  message: string = "An unexpected error occurred",
  errors?: ApiError[]
): ApiResponse<undefined> {
  const response: ApiResponse<undefined> = {
    status: "error",
    code: statusCode,
    message,
    timestamp: new Date().toISOString(),
  };
  if (errors) {
    response.errors = errors;
  }
  return response;
}
