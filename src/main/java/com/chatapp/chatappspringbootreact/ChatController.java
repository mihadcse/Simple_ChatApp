package com.chatapp.chatappspringbootreact;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
public class ChatController {
    @MessageMapping("/send")
    @SendTo("/topic/message")
    public Message sendMessage( Message message) {
//        message.setDateTime(LocalDateTime.now());
        return message;
    }
}
