package ma.ensias.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import ma.ensias.beans.Post;
import ma.ensias.forms.PostForm;


/**
 * Servlet implementation class PostServlet
 */

public class PostServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PostServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PostForm postForm = new PostForm();
		Post post = postForm.searchPost(request);
		
		Gson gson = new Gson();
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("success", postForm.getResult());
		jsonObject.add("errors", gson.toJsonTree(postForm.getErrors()));
		if(postForm.getResult())
		{
			jsonObject.add("post", gson.toJsonTree(post));
			jsonObject.add("comments", gson.toJsonTree(postForm.getComments()));
		}
		String message = jsonObject.toString();
		
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(message);
		out.flush();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PostForm postForm = new PostForm();
		postForm.createPost(request);
		

		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("success", postForm.getResult());
		jsonObject.add("errors", new Gson().toJsonTree(postForm.getErrors()));
		
		String message = jsonObject.toString();
		
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(message);
		out.flush();
	
	}

}
