package com.tesla.finance.exception;

/**
 * Management of exceptions
 */
public class FinanceServiceException extends Exception {

    private String code;
    private String message;

    public FinanceServiceException(){}

    public FinanceServiceException(String newCode, String newMessage){
        this.code = newCode;
        this.message = newMessage;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String newCode) {
        this.code = newCode;
    }

    @Override
    public String getMessage() {
        StringBuilder sb = new StringBuilder();
        message = sb.append(this.code).append("&").append(this.message).toString();
        return message;
    }

    public void setMessage(String newMessage) {
        this.message = newMessage;
    }
}
