#check if the input string is a valid parentheses string
def isValidParentheses(string):
    #check if there is an even number of parentheses
    if(len(string)%2!=0):
        return False
    else:
        #check if the string is balanced
        stack = []
        for x in string:
            if(x=='(' or x=='[' or x=='{'):
                stack.append(x)
            else:
                if(len(stack)==0):
                    return False
                else:
                    if(x==')' and stack[len(stack)-1]=='('):
                        stack.pop()
                    elif(x==']' and stack[len(stack)-1]=='['):
                        stack.pop()
                    elif(x=='}' and stack[len(stack)-1]=='{'):
                        stack.pop()
                    else:
                        return False
        if(len(stack)==0):
            return True
        else:
            return False


