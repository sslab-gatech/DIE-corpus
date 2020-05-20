h = Function("a", "b", "c", "...rest", "return rest.toString();");
h.length;
3;
h(1, 2, 3, 4, 5);
"4,5";
