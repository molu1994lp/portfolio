package mol.piotr.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mol.piotr.email.EmailSenderImpl;
import mol.piotr.email.MyEmailModell;

@Controller
public class Controllers {
	private final String fileName = "templates/Piotr_Mol.pdf";
	
	@Autowired
	EmailSenderImpl emailSenderImpl;
	
	@RequestMapping("/")
	public String index(){
		return "redirect:/home";
	}
	
	@RequestMapping("/home")
	public String home(Model model) {
		model.addAttribute("myEmailModel", new MyEmailModell());
		return "home";
	}
	
	@PostMapping(value="/home")
	public String send(@ModelAttribute MyEmailModell myEmailModel) {
		emailSenderImpl.sendEmail(myEmailModel.getName(), myEmailModel.getContent(), myEmailModel.getEmail());
		return "redirect:/home";
	}
	
	@RequestMapping(value="letter", method = RequestMethod.GET, produces =  "application/pdf")
	@ResponseBody
	public void getLetter(HttpServletRequest request, HttpServletResponse httpServletResponse) {
		
		byte[] pdfContents = null;
		httpServletResponse.setContentType("application/pdf");
		ClassLoader classLoader = new Controllers().getClass().getClassLoader();
		try {
			File file = new File(classLoader.getResource(fileName).getFile());
			pdfContents = Files.readAllBytes(file.toPath());
			httpServletResponse.getOutputStream().write(pdfContents);
		}
		catch(IOException ioe) {
			ioe.printStackTrace();
		}	
	}



}
