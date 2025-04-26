package net.kt.contact_backend.repository;

import net.kt.contact_backend.entity.Contacts;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContactRepository extends JpaRepository<Contacts, Long> {
}
