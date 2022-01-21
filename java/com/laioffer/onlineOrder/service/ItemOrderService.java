package com.laioffer.onlineOrder.service;

import com.laioffer.onlineOrder.dao.ItemOrderDao;
import com.laioffer.onlineOrder.dao.MenuInfoDao;
import com.laioffer.onlineOrder.entity.Customer;
import com.laioffer.onlineOrder.entity.MenuItem;
import com.laioffer.onlineOrder.entity.OrderItem;
import com.sun.org.apache.xpath.internal.operations.Or;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class ItemOrderService {

    @Autowired
    private MenuInfoService menuInfoService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private ItemOrderDao itemOrderDao;

    public void saveItemOrder(int menuId) {
        OrderItem orderItem = new OrderItem();
        MenuItem menuItem = menuInfoService.getMenuItem(menuId);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Customer customer = customerService.getCustomer(email);
        if (customer != null) {
            orderItem.setMenuItem(menuItem);
            orderItem.setCart(customer.getCart());
            orderItem.setQuantity(1);
            orderItem.setPrice(menuItem.getPrice());
            itemOrderDao.save(orderItem);
        }
    }
}
