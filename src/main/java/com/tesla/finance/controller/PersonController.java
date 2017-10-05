package com.tesla.finance.controller;

import com.tesla.finance.model.Persona;
import com.tesla.finance.service.PersonaService;
import com.tesla.finance.util.GeneralResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class PersonController extends AbstractFinanceController {

    @Autowired
    private PersonaService personaService;

    @RequestMapping(value="/getPersons.htm", method = RequestMethod.GET)
    @ResponseBody
    public String getPersons(HttpServletRequest request, HttpServletResponse response) throws Exception {
        GeneralResponse generalResponse = new GeneralResponse();
        String jsonData;
        ObjectMapper mapper = new ObjectMapper();
        generalResponse.setData(personaService.findAll());
        jsonData = mapper.writeValueAsString(generalResponse);
        return jsonData;
    }

    @RequestMapping(value="/saveOrUpdatePerson.htm", method = RequestMethod.GET)
    @ResponseBody
    public String savePersona(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        GeneralResponse generalResponse = new GeneralResponse();
        String data;
        String jsonData = request.getParameter("jsonData");
        try {
            Persona personaBean = mapper.readValue(jsonData, Persona.class);
            personaService.saveOrUpdate(personaBean);
            generalResponse.setSuccess(true);

            generalResponse.setTotalCount(0L);
            generalResponse.setData(true);
        } catch (Exception e){
            generalResponse.setSuccess(false);
            generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
            e.getStackTrace();
        } finally {
            data = mapper.writeValueAsString(generalResponse);
        }
        return data;
    }

    @RequestMapping(value="/updatePersona.htm", method = RequestMethod.GET)
    @ResponseBody
    public String updatePersona(HttpServletRequest request, HttpServletResponse response) throws Exception {
        GeneralResponse generalResponse = new GeneralResponse();
        String data;
        String jsonData = request.getParameter("jsonData");
        ObjectMapper mapper = new ObjectMapper();
        try {
            Persona personaBean = mapper.readValue(jsonData, Persona.class);
            personaService.updatePersona(personaBean);
            generalResponse.setSuccess(true);
            generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
        } catch (Exception e){
            generalResponse.setSuccess(false);
            generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
        } finally {
            data = mapper.writeValueAsString(generalResponse);
        }
        return data;
    }

    @RequestMapping(value="/deletePersona.htm", method = RequestMethod.GET)
    @ResponseBody
    public String deletePersona(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String numberDni = request.getParameter("numberDni");
        GeneralResponse generalResponse = new GeneralResponse();
        String jsonData;
        try {
            personaService.deletePersona(numberDni);
            generalResponse.setSuccess(true);
            generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
        } catch (Exception e){
            e.printStackTrace();
            generalResponse.setSuccess(false);generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
        } finally {
            jsonData = mapper.writeValueAsString(generalResponse);
        }
        return jsonData;
    }

    @RequestMapping(value="/loadGridPersonsDefault.htm", method = RequestMethod.GET)
    @ResponseBody
    public String loadGridPersonsDefault(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        GeneralResponse generalResponse = new GeneralResponse();
        String jsonData;
        try {
            List<Persona> list = personaService.findAll();
            long count = list.size();
            generalResponse.setSuccess(true);
            generalResponse.setTotalCount(count);
            generalResponse.setData(list);
        } catch (Exception e){
            generalResponse.setSuccess(false);generalResponse.setTotalCount(0L);
            generalResponse.setData(null);
        } finally {
            jsonData = mapper.writeValueAsString(generalResponse);
        }
        return jsonData;
    }
}