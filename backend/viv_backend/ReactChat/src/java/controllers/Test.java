package controllers;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import entity.Chat;
import entity.Chat_Status;
import entity.User;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

@WebServlet(name = "Test", urlPatterns = {"/Test"})
public class Test extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {

            Session session = HibernateUtil.getSessionFactory().openSession();
            Gson gson = new Gson();

            Criteria criteria1 = session.createCriteria(Chat.class);
            criteria1.add(Restrictions.eq("from_user_id", (User) session.get(User.class, 1)));
            List<Chat> chats = criteria1.list();

            //create chat array
            JsonArray chatArray = new JsonArray();

            for (Chat chat : chats) {
                //create chat object
                JsonObject chatObject = new JsonObject();
                chatObject.addProperty("message", chat.getMessage());
                chatArray.add(chatObject);
            }

            //send response
            response.setContentType("application/json");
            response.getWriter().write(gson.toJson(chats));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
