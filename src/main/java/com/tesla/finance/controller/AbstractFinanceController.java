package com.tesla.finance.controller;

import com.tesla.finance.util.AppSessionData;
import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;

@Controller
public class AbstractFinanceController {

    protected AppSessionData datosDeSession(HttpServletRequest request){
        AppSessionData app = (AppSessionData) request.getSession().getAttribute("datosEnSession");
        return app;
    }

}
