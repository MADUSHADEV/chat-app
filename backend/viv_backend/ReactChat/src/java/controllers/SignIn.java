package controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.User;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import model.Validations;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

@WebServlet(name = "SignIn", urlPatterns = {"/SignIn"})
public class SignIn extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Gson gson = new Gson();
        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("success", false);

        JsonObject requestJson = gson.fromJson(request.getReader(), JsonObject.class);
        String mobile = requestJson.get("mobile").getAsString();
        String password = requestJson.get("password").getAsString();
        
        System.out.println(mobile);
        System.out.println(password);

        if (mobile.isEmpty()) {
            //mobile number is blank
            responseJson.addProperty("message", "Please fill Mobile Number");
        } else if (!Validations.isMobileNumberValid(mobile)) {
            //invalid mobile number
            responseJson.addProperty("message", "Invalid Mobile Number");
        } else if (password.isEmpty()) {
            //password is blank
            responseJson.addProperty("message", "Please Fill Your Password");
        } else if (!Validations.ispasswordValid(password)) {
            //invalid password
            responseJson.addProperty("message", "Password must include at least one uppercase letter, number, "
                    + "special character and be at least eight character long");
        } else {

            Session session = HibernateUtil.getSessionFactory().openSession();

            //search mobile number
            Criteria criteria1 = session.createCriteria(User.class);
            criteria1.add(Restrictions.eq("mobile", mobile));
            criteria1.add(Restrictions.eq("password", password));

            if (!criteria1.list().isEmpty()) {
                ///user found

                User user = (User) criteria1.uniqueResult();

                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Sign In Success");
                responseJson.add("user", gson.toJsonTree(user));
            } else {
                //mobile number not used
                responseJson.addProperty("message", "Invalid Credentials!");
            }

            session.close();
        }

        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseJson));
    }

}
