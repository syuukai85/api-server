FROM golang:1.12 as dev
WORKDIR /go/api
ENV GO111MODULE=on
COPY . .
RUN go get github.com/pilu/fresh
CMD ["fresh"]