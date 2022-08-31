# Write your code here:

# Don't touch anthing below this line 🙅🏻‍♂️🙅🏻‍♀️

monthly_revenue = 5500000
monthly_expenses = 2700000
tax_credits = 0.01

def get_yearly_revenue(monthly_revenue):
    return monthly_revenue * 12

def get_yearly_expenses(monthly_expenses):
    return monthly_expenses * 12 

def get_tax_amount(profit):
    if profit >= 100000:
        tax_amount = profit * 0.25
    else:
        tax_amount = profit * 0.15
    return tax_amount 

def apply_tax_credits(tax_amount, tax_credits):
    return tax_amount * tax_credits 

profit = get_yearly_revenue(monthly_revenue) - get_yearly_expenses(monthly_expenses)

tax_amount = get_tax_amount(profit)

final_tax_amount = tax_amount - apply_tax_credits(tax_amount, tax_credits)

print(f"Your tax bill is: ${final_tax_amount}")