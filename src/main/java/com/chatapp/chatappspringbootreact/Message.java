package com.chatapp.chatappspringbootreact;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Message {
    @Id
    @GeneratedValue
    private Long id;

    private Long senderId;
    private Long receiverId;

    private String content;

    @Column(nullable = false)
    private Long timestamp;

    @PrePersist
    public void prePersist() {
        this.timestamp = System.currentTimeMillis();
    }
}

