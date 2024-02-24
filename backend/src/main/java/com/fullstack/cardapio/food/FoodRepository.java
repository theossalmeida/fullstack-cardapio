package com.fullstack.cardapio.food;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {
    List<Food> findByTitleContainingIgnoreCase(String title);
}
