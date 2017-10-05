package com.tesla.finance.util;

public class GeneralResponse {
    private boolean success;
    private Object data;
    private Long totalCount;
    private Result result;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public void setData(Object data, long newTotalCount) {
        this.data = data;
        this.totalCount = newTotalCount;
    }

    public Long getTotalCount() { return totalCount; }

    public void setTotalCount(Long totalCount) { this.totalCount = totalCount; }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }
}
