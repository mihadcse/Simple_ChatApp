package com.chatapp.chatappspringbootreact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    @Query("SELECT m FROM Message m WHERE " +
            "(m.senderId = :sender1 AND m.receiverId = :receiver1) OR " +
            "(m.senderId = :sender2 AND m.receiverId = :receiver2) " +
            "ORDER BY m.timestamp ASC")
    List<Message> findConversation(
            @Param("sender1") Long sender1,
            @Param("receiver1") Long receiver1,
            @Param("sender2") Long sender2,
            @Param("receiver2") Long receiver2
    );
}
