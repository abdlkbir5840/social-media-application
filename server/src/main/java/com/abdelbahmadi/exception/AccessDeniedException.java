package com.abdelbahmadi.exception;

import org.springframework.http.HttpStatus;

public class AccessDeniedException extends  RuntimeException{
    private final HttpStatus httpStatus;
    public AccessDeniedException(String message) {
        super(message);
        this.httpStatus = HttpStatus.FORBIDDEN;
    }
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
