function f() {
    g() ++;
}
f.toString();

function f() {
    g() --;
}
f.toString();

function f() {
    ++g();
}
f.toString();

function f() {
    --g();
}
f.toString();

function f() {
    g() = 1;
}
f.toString();

function f() {
    g() += 1;
}
f.toString();
try {
    g() ++;
} catch (e) {}
try {
    g() --;
} catch (e) {}
try {
    ++g();
} catch (e) {}
try {
    --g();
} catch (e) {}
try {
    g() = 1;
} catch (e) {}
try {
    g() += 1;
} catch (e) {}