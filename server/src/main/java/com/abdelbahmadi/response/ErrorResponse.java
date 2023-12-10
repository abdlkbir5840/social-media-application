package com.abdelbahmadi.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.time.LocalDateTime;

@Getter
public class ErrorResponse {
    private  String message;
    private HttpStatus httpStatus;
    private String stackTrace;
    private LocalDateTime timestamp;
    public ErrorResponse(String message, HttpStatus httpStatus, Throwable  throwable, LocalDateTime timestamp) {
        this.message = message;
        this.httpStatus = httpStatus;
        this.stackTrace = this.getStackTraceAsString(throwable);
        this.timestamp = timestamp;
    }
    private String getStackTraceAsString(Throwable throwable) {
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        throwable.printStackTrace(printWriter);
        return stringWriter.toString();
    }
}
