package controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.User;
import model.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

@WebServlet(name = "Profile", urlPatterns = {"/Profile"})
public class Profile extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson = new Gson();
        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("success", false);

        BufferedReader reader = request.getReader();
        JsonObject requestJson = gson.fromJson(reader, JsonObject.class);

        String userId = requestJson.get("user_id").getAsString();
        String mobile = requestJson.get("mobile").getAsString();
        String firstName = requestJson.get("firstName").getAsString();
        String lastName = requestJson.get("lastName").getAsString();
        String uri = requestJson.has("uri") ? requestJson.get("uri").getAsString() : null;

        Session session = null;
        Transaction transaction = null;

        try {
            // Start a Hibernate session
            session = HibernateUtil.getSessionFactory().openSession();
            transaction = session.beginTransaction();

            // Fetch the existing user
            User user = (User) session.get(User.class, Integer.parseInt(userId));
            if (user == null) {
                responseJson.addProperty("message", "User not found");
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                response.getWriter().write(gson.toJson(responseJson));
                return;
            }

            // Update the user data
            user.setMobile(mobile);
            user.setFirst_name(firstName);
            user.setLast_name(lastName);
            if (uri != null) {
               user.setUri(uri);
            }

            // Save the updated user
            session.update(user);
            transaction.commit();

            // Prepare success response
            responseJson.addProperty("success", true);
//            responseJson.addProperty("message", "Profile updated successfully");
//            responseJson.addProperty("user_id", userId);
//            responseJson.addProperty("mobile", mobile);
//            responseJson.addProperty("firstName", firstName);
//            responseJson.addProperty("lastName", lastName);
//            responseJson.addProperty("uri", uri);
            
            
            responseJson.add("user", gson.toJsonTree(user));
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            responseJson.addProperty("message", "Error updating profile: " + e.getMessage());
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } finally {
            if (session != null) {
                session.close();
            }
        }

        // Set the response type to JSON and write the response
        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseJson));
    }
}
