package com.fullstack.cardapio.controller;

import com.fullstack.cardapio.food.Food;
import com.fullstack.cardapio.food.FoodRepository;
import com.fullstack.cardapio.food.FoodRequestDTO;
import com.fullstack.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<FoodResponseDTO> getAll(@RequestParam(required = false) String q) {
        List<FoodResponseDTO> foodList;

        if (q != null && !q.isEmpty()) {
            foodList = repository.findByTitleContainingIgnoreCase(q).stream().map(FoodResponseDTO::new).toList();
        } else {
            foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        }

        return foodList;
    }
}
